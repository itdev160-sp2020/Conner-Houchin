


(function() 
{
    var data = 
    [
        {
           name: 'git-blame',
           description: 'The git-blame package allows you to toggle git-blame annotations in the gutter of the Atom editor',
           author: 'alexcorre',
           url: 'https://atom.io/packages/git-blame',
           downloads: 258281 ,
           stars: 445,
           selector: 'p1'

        },
        {
            name: 'git-time-machine',
            description: 'This tool shows you a visual plot of commits in your current file over time. ',
            author: 'littlebee',
            url: 'https://atom.io/packages/git-time-machine',
            downloads: 401802 ,
            stars: 1036,
            selector: 'p2'
 
         },
         {
            name: 'Highlight Selected',
            description: 'The Highlight Selected package is super simple: it highlights the current word selected on double click',
            author: 'richrace',
            url: 'https://atom.io/packages/highlight-selected',
            downloads: 2332997 ,
            stars: 3188,
            selector: 'p3'
         }
    ];


    function package(data)
    {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

    this.getFormattedDownloads = function() 
    {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function()
    {
        return this.stars.toLocaleString();
    }
}

    var getTotaysDate = function()
    {
        var today = new Date();
        return today.toDateString();
    }

    var getEl = function(id)
    {
        return document.getElementById(id);
    }

    var writePackageInfo = function(package)
    {
        var selector = package.selector;
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    }

    dataEl = getEl('date');
    dataEl.textContent = getTotaysDate();
    
    var gitBlame = new package(data[0]);
    writePackageInfo(gitBlame);

    var gitTimeMachine = new package(data[1]);
    writePackageInfo(gitTimeMachine);

    var highlightSelected = new package(data[2]);
    writePackageInfo(highlightSelected);


}());