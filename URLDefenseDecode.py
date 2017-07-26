#!/usr/local/bin/python3
# Original Python source/inspiration:
# https://help.proofpoint.com/@api/deki/files/177/URLDefenseDecode.py?revision=1

import sys
import re
import urllib.parse
import html.parser

def main():
	rewrittenurl = sys.argv[1]
	match = re.search(r'https://urldefense.proofpoint.com/(v[0-9])/', rewrittenurl)
	if match:
		if match.group(1) == 'v1':
			decodev1(rewrittenurl)
		elif match.group(1) == 'v2':
			decodev2(rewrittenurl)
		else:
			print('Unrecognized version in: ', rewrittenurl)

	else:
		print('No valid URL found in input: ', rewrittenurl)

def decodev1 (rewrittenurl):
	match = re.search(r'u=(.+?)&k=',rewrittenurl)
	if match:
		urlencodedurl = match.group(1)
		htmlencodedurl = urllib.parse.unquote(urlencodedurl)
		url = html.parser.HTMLParser().unescape(htmlencodedurl)
		print(url)
	else:
		print('Error parsing URL')

def decodev2 (rewrittenurl):
	match = re.search(r'u=(.+?)&[dc]=',rewrittenurl)
	if match:
		specialencodedurl = match.group(1)
		trans = str.maketrans('-_', '%/')
		urlencodedurl = specialencodedurl.translate(trans)
		htmlencodedurl = urllib.parse.unquote(urlencodedurl)
		url = html.parser.HTMLParser().unescape(htmlencodedurl)
		print(url)
	else:
		print('Error parsing URL')

if __name__ == '__main__':
    main()
