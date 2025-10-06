const availableCommands = ['hello', 'about', 'help'];
export const Commands = {
    hello: ['hi!', 'welcome to my site.'],
    help: ['Available commands: ', availableCommands.join(', ')],
    logo: [
        `<pre class="text-blue-400 text-xs leading-tight">
		  ███╗   ███╗██╗   ██╗    ███████╗██╗████████╗███████╗
		  ████╗ ████║╚██╗ ██╔╝    ██╔════╝██║╚══██╔══╝██╔════╝
		  ██╔████╔██║ ╚████╔╝     ███████╗██║   ██║   █████╗  
		  ██║╚██╔╝██║  ╚██╔╝      ╚════██║██║   ██║   ██╔══╝  
		  ██║ ╚═╝ ██║   ██║       ███████║██║   ██║   ███████╗
		  ╚═╝     ╚═╝   ╚═╝       ╚══════╝╚═╝   ╚═╝   ╚══════╝
</pre>`
    ],
    about: async () => {
        try {
            const response = await fetch('https://api.github.com/users/GazDuckington');
            const data = await response.json();
            return [
                `
<div class="grid grid-cols-[auto_1fr] gap-6 my-2">
  <div class="text-yellow-300">
    <pre class="text-xs leading-tight animate-pulse">
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⣩⣭⣶⣶⣮⣭⡙⠿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠿⣋⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡙⢿⣿⣿⣿
⣿⣿⣿⣿⣿⡃⠄⠹⡿⣿⣿⣿⣿⠟⠛⣿⣿⣿⣿⣷⡌⢿⣿⣿
⣿⣿⣿⣿⣿⠐⣠⡶⣶⣲⡎⢻⣿⣤⣴⣾⣿⣿⣿⣿⣿⠸⣿⣿
⣿⠟⣋⡥⡶⣞⡯⣟⣾⣺⢽⡧⣥⣭⣉⢻⣿⣿⣿⣿⣿⣆⢻⣿
⡃⣾⢯⢿⢽⣫⡯⣷⣳⢯⡯⠯⠷⠻⠞⣼⣿⣿⣿⣿⣿⣿⡌⣿
⣦⣍⡙⠫⠛⠕⣋⡓⠭⣡⢶⠗⣡⣶⡝⣿⣿⣿⣿⣿⣿⣿⣧⢹
⣿⣿⣿⣿⣿⣿⣘⣛⣋⣡⣵⣾⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⢸
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⢸
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⢸
</pre>
  </div>
  <div class="space-y-1.5">
    <div class="text-xl font-bold text-white mb-2">${data.name}</div>
    <div><span class="text-green-400 font-semibold">@</span>${data.login}</div>
    <div class="h-px bg-slate-700 my-2"></div>
    <div class="grid grid-cols-3 gap-2 text-sm">
      <div class="text-center p-1 bg-slate-800 rounded">
        <div class="text-green-400 font-semibold">${data.followers}</div>
        <div class="text-gray-400 text-xs">Followers</div>
      </div>
      <div class="text-center p-1 bg-slate-800 rounded">
        <div class="text-green-400 font-semibold">${data.following}</div>
        <div class="text-gray-400 text-xs">Following</div>
      </div>
      <div class="text-center p-1 bg-slate-800 rounded">
        <div class="text-green-400 font-semibold">${data.public_repos}</div>
        <div class="text-gray-400 text-xs">Repos</div>
      </div>
    </div>
    <div class="text-gray-400 text-sm mt-2 italic">"${data.bio || 'No bio available'}"</div>
  </div>
  </div>

<div class='flex space-x-2'>
<span>></span>
<a class='flex space-x-2' target='_blank' href='https://github.com/GazDuckington/sensi' title='open repository sensi'>
<p class='capitalize font-semibold'>sensi</p>
<span class='italic text-blue-600'>sentiment analysis for the Indonesian language.</span>
</a>
</div>

<div class='flex space-x-2'>
<span>></span>
<a class='flex space-x-2' target='_blank' href='https://github.com/GazDuckington/mycv' title='this website's directory>
<p class='capitalize font-semibold'>svelte cv</p>
<span class='italic text-blue-600'>this site.</span>
</a>
</div>
		`
            ];
        }
        catch (error) {
            return [`Error fetching data: ${error}`];
        }
    }
};
