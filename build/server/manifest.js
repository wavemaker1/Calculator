const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-268f92f3.js","imports":["_app/immutable/start-268f92f3.js","_app/immutable/chunks/index-b65dad4a.js","_app/immutable/chunks/singletons-8cea3c0f.js","_app/immutable/chunks/index-babd71ff.js","_app/immutable/chunks/parse-b67c4dc9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-3139e1dc.js'),
			() => import('./chunks/1-31c3976b.js'),
			() => import('./chunks/2-9b3d0edb.js'),
			() => import('./chunks/3-e99a32db.js'),
			() => import('./chunks/4-88f554ad.js'),
			() => import('./chunks/5-fd5a4d40.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/sverdle/how-to-play",
				pattern: /^\/sverdle\/how-to-play\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set(["/","/about","/sverdle/how-to-play"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
