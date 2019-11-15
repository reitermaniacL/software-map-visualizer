export default {
	"projectName": "Sample Project with Edges",
	"apiVersion": "1.1",
	"nodes": [
		{
			"name": "root",
			"type": "Folder",
			"attributes": {},
			"children": [
				{
					"name": "sample1OnlyLeaf.scss",
					"type": "File",
					"attributes": {
						"rloc": 400,
						"functions": 10,
						"mcc": 100,
						"pairingRate": 32,
						"avgCommits": 17
					},
					"link": "http://www.google.de"
				},
				{
					"name": "bigLeaf.ts",
					"type": "File",
					"attributes": {
						"rloc": 100,
						"functions": 10,
						"mcc": 1,
						"pairingRate": 77,
						"avgCommits": 56
					},
					"link": "http://www.google.de"
				},
				{
					"name": "ParentLeaf",
					"type": "Folder",
					"attributes": {},
					"children": [
						{
							"name": "smallLeaf.html",
							"type": "File",
							"attributes": {
								"rloc": 30,
								"functions": 100,
								"mcc": 100,
								"pairingRate": 60,
								"avgCommits": 51
							}
						},
						{
							"name": "otherSmallLeaf.ts",
							"type": "File",
							"attributes": {
								"rloc": 70,
								"functions": 1000,
								"mcc": 10,
								"pairingRate": 65,
								"avgCommits": 22
							}
						}
					]
				}
			]
		}
	],
	"edges": [
		{
			"fromNodeName": "/root/bigLeaf.ts",
			"toNodeName": "/root/ParentLeaf/smallLeaf.html",
			"attributes": {
				"pairingRate": 89,
				"avgCommits": 34
			}
		},
		{
			"fromNodeName": "/root/sample1OnlyLeaf.scss",
			"toNodeName": "/root/ParentLeaf/smallLeaf.html",
			"attributes": {
				"pairingRate": 32,
				"avgCommits": 17
			}
		},
		{
			"fromNodeName": "/root/ParentLeaf/otherSmallLeaf.ts",
			"toNodeName": "/root/bigLeaf.ts",
			"attributes": {
				"pairingRate": 65,
				"avgCommits": 22
			}
		}
	],
	"attributeTypes": {
		"nodes": [{ "rloc": "absolute" }, { "functions": "absolute" }, { "mcc": "absolute" }],
		"edges": [{ "pairingRate": "relative" }, { "avgCommits": "absolute" }]
	}
}