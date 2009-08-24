#!/usr/bin/env python
# -*- coding: utf-8 -*-
# vim: et sw=4 ts=4

'''
Copyright (c) 2009, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.net/yui/license.html
version: 1.0.0b1
'''

''' Prints the Intellisense file needed for Editors such as Visual Studio  ''' 
import os, re, simplejson, shutil, logging, logging.config, time, datetime, sys
from const import *
# from cStringIO import StringIO
import codecs
import pprint


try:
    logging.config.fileConfig(os.path.join(sys.path[0], LOGCONFIG))
except:
    pass

log = logging.getLogger('yuidoc.vsdoc')
pp = pprint.PrettyPrinter(indent=4)

class VSDocGenerator(object):

    def __init__(self, infile, outfile, debugfile, version):
        self.infile = infile
        self.outfile = outfile
        self.debugfile = debugfile
        self.version = int(version)
        self.outstr = []
        self.classes = []
        self.showPrivate = False
        self.reserved = ['get', 'set', 'delete', 'namespace', 'require']

    def _getJSON(self, file):
        f = codecs.open(file, "r", "utf-8" )
        self.rawdata = f.read()
        self.data = simplejson.loads(self.rawdata)

    def _orderClasses(self):
        classes = []
        for i in self.data['classmap']:
            n = i
            if self.version == 3:
                n = 'YUI.prototype.%s' % i
                if i == 'YUI':
                    n = i
                if n.find('~') > 0:
                    n = False
            if n:
                classes.append(n)
        
        for i in self.data['namespaces']:
            n = i
            if self.version == 3:
                n = 'YUI.prototype.%s' % i
            classes.append(n)
        
        classes.sort()

        for i in classes:
            n = i
            o = {
                'name': i
            }
            if self.version == 3:
                n = i.replace('YUI.prototype.', '')
            if n in self.data['classmap']:
                o['info'] = self.data['classmap'][n]

            self.classes.append(o)
        
    def _processClasses(self):
        for i in self.classes:
            pre = ''
            params = []
            if '.' not in i['name']:
                pre = 'var '
            if 'info' in i:
                if 'constructors' in i['info']:
                    if 'params' in i['info']['constructors'][0]:
                        for p in i['info']['constructors'][0]['params']:
                            n = self._cleanString(p['name'])
                            if n not in params:
                                arg = self._filterArgs(n)
                                if arg:
                                    params.append(arg)
            
            self.outstr.append(pre + i['name'] + ' = function(' + ", ".join(params) + ') {')
            if 'info' in i:
                if 'constructors' in i['info']:
                    if 'description' in i['info']['constructors'][0]:
                        self.outstr.append('   /// <summary> ' + self._cleanString(i['info']['constructors'][0]['description']) + ' </summary>')
                    if 'params' in i['info']['constructors'][0]:
                        for p in i['info']['constructors'][0]['params']:
                            self.outstr.append(' /// <param name="' + self._cleanString(p['name']) + '" type="' + self._cleanString(p['type']) + '">' + self._cleanString(p['description']) + '</param>')
                else:
                    if 'description' in i['info']:
                        self.outstr.append('   /// <summary> ' + self._cleanString(i['info']['description']) + ' </summary>')
            self.outstr.append('};')

            if 'info' in i:
                if 'extends' in i['info']:
                    self.extendStack.append({ 'name': i['name'], 'extends': i['info']['extends']})
                if 'methods' in i['info']:
                    static = False
                    if 'static' in i['info']:
                        static = True
                    if 'guessedtype' in i['info']:
                        if i['info']['guessedtype'] == 'property':
                            static = True
                    #self._processMethods(i['name'], i['info']['methods'], static)
                    self.methodStack.append({ 'name': i['name'], 'methods': i['info']['methods'], 'static': static })
    
    def _processExtends(self, base, extends):
        if base not in self.extendedDone:
            #print "%s extends %s" % (base, extends)
            if self.version == 3:
                extends = "YUI.prototype.%s" % extends
            self.outstr.append('_yui_extend(%s, %s);' % (base, extends))
            self.extendedDone.append(base);

            #self.outstr.append('%s.prototype = new %s;' % (base, extends))
            #self.extendedDone.append(base);

    def _filterArgs(self, arg):
        ## HACK -- Needs fixed in docs..
        arg = arg.replace('*', '').replace('(optional)', '').replace('oArgs.', '').replace('.', '').replace('-', '')
        arg = arg.replace('true', 'True').replace('false', 'False').replace(',', '').replace('/', '').replace('+', '')
        arg = arg.replace('set', 'setter')
        arg = arg.replace('get', 'getter')
        return arg

    def _processMethods(self, base, data, static):
        for i in data:
            proto = '.prototype'
            params = []
            if static or 'static' in data[i]:
                proto = ''
            newname = '.' + i
            name = i
            if i in self.reserved:
                newname = '["' + i + '"]'
            func = base + proto + newname
            if base in name:
                func = name
            elif '.' in name:
                tmp = name.split('.')
                func = base + proto + tmp[1]
            
            show = True
            if 'private' in data[i]:
                if self.showPrivate == False:
                    show = False
            
            if i == "()":
                show = False

            if show == True:
                if 'params' in data[i]:
                    for p in data[i]['params']:
                        n = self._filterArgs(p['name'])
                        if n:
                            if n not in params:
                                params.append(n)

                self.outstr.append(func + ' = function(' + ', '.join(params) + ') {')
                if 'description' in data[i]:
                    self.outstr.append('   /// <summary> ' + self._cleanString(data[i]['description']) + ' </summary>')
                if 'private' in data[i]:
                    self.outstr.append('   /// <private />')
                if 'return' in data[i]:
                    if 'type' in data[i]['return']:
                        self.outstr.append('   /// <returns type="' + self._cleanString(data[i]['return']['type']) + '" />')
                if 'params' in data[i]:
                    for p in data[i]['params']:
                        self.outstr.append(' /// <param name="' + self._cleanString(p['name']) + '" type="' + self._cleanString(p['type']) + '">' + self._cleanString(p['description']) + '</param>')

                self.outstr.append('};')

    def strip_tags(self, value):
        "Return the given HTML with all tags stripped."
        return re.sub(r'<[^>]*?>', '', value) 
    

    def _cleanString(self, str):
        str = str.replace("\n", '').replace("\r", '').replace("\t", ' ')
        return self.strip_tags(str)

    def _processExtendStack(self):

        self.outstr.append('//Starting Extends')
        self.outstr.append('var _yui_extend = function(subc, superc, overrides) {')
        self.outstr.append('    var F = function() {}, i, OP = Object.prototype;')
        self.outstr.append('    F.prototype=superc.prototype;')
        self.outstr.append('    subc.prototype=new F();')
        self.outstr.append('    subc.prototype.constructor=subc;')
        self.outstr.append('    subc.superclass=superc.prototype;')
        self.outstr.append('    if (superc.prototype.constructor == OP.constructor) {')
        self.outstr.append('        superc.prototype.constructor=superc;')
        self.outstr.append('    }')
        self.outstr.append(' };')
        
        
        for i in self.extendStack:
            if i['extends'] not in self.extended:
                self.extended.append(i['extends'])
            else:
                self._processExtends(i['name'], i['extends'])

        for i in self.extendStack:
            if i['extends'] in self.extended:
                self._processExtends(i['name'], i['extends'])


    def _write(self, file):
        self.outstr = []
        self.extendStack = []
        self.extended = []
        self.extendedDone = []
        self.methodStack = []

        self.outstr.append('/*')
        self.outstr.append('This file has been generated to support Visual Studio Intellisense, and is not a functional file.')
        self.outstr.append('It is designed to be included via the reference tag in Visual Studio.')
        self.outstr.append('<reference path="yui2.vsdoc.js" />')
        self.outstr.append('This file includes the documentation for all modules and components in the YUI Library.')
        self.outstr.append('It will not be able to detect if you have not included all the proper files.')
        self.outstr.append('All methods, classes, Components and Widgets will still be listed in Intellisense.')
        self.outstr.append('*/')
        self.outstr.append('')
        self.outstr.append('//Starting Classes')
        self._processClasses()
        
        self._processExtendStack()


        self.outstr.append('//Starting Methods')
        for i in self.methodStack:
            self._processMethods(i['name'], i['methods'], i['static'])

        #pp.pprint(self.classes)

        f = codecs.open(file, "w", "utf-8" )
        f.write("\n".join(self.outstr))

    def process(self):
        self._getJSON(self.infile);

        self._orderClasses()

        self._write(self.outfile)

        if self.debugfile:
            self.showPrivate = True
            self._write(self.debugfile)


def main():
    from optparse import OptionParser
    optparser = OptionParser("usage: %prog [options]")
    optparser.set_defaults(outputfile="docs.vsdoc.js", 
                           inputfile="raw.json",
                           debugfile=False,
                           version=2
                           )
    optparser.add_option( "-o", "--outputfile",
        action="store", dest="outputfile", type="string",
        help="The name of the file to write to" )
    optparser.add_option( "-f", "--file",
        action="store", dest="inputfile", type="string",
        help="The name of the file that contains the JSON doc info" )
    optparser.add_option( "-d", "--debugfile",
        action="store", dest="debugfile", type="string",
        help="The name of the file to write the debug info to" )
    optparser.add_option( "-v", "--version",
        action="store", dest="version", type="string",
        help="The version of the library used in the docs" )


    options = optparser.parse_args()

    if len(options) > 0:
        generator = VSDocGenerator(options[0].inputfile, 
                               options[0].outputfile,
                               options[0].debugfile,
                               options[0].version
                               )
        generator.process()
    else:
        optparser.error("Incorrect number of arguments")
           
if __name__ == '__main__':
    main()

