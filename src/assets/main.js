const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC55-mxUj5Nj3niXFReG44OQ&part=snippet%2Cid&order=date&maxResults=8'

const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6db38d8575mshf872bd3613df35ap1f3faejsnce5ff451f7ca',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data
}

(async () => {
    try {
        const profile = await fetchData(API)

        let view  = `
        ${profile.items.map(result => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
            >
                <img src="${result.snippet.thumbnails.high.url}" alt="${result.snippet.description}" class="w-full" />
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${result.snippet.title}
                </h3>
            </div>
        </div>
        `
        ).slice(0,4).join('')}
        `;
        content.innerHTML = view
    } catch (error) {
        console.log(error)
    }
})();

