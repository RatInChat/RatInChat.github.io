import adapter from "@sveltejs/adapter-static"; 
// was "@sveltejs/adapter-auto"
const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs",
			fallback: '200.html'
        }),

    }
};

export default config;