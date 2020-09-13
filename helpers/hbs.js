module.exports = {
    truncate: function(str, len){
        if(str.length > len && str.length >0){
            let new_str = str + ' '
            new_str = str.substr(0, len)
            new_str = str.substr(0, new_str.lastIndexOf(' '))
            new_str = new_str.length > 0 ? new_str : str.substr(0, len)
            return new_str + '...'
        }
        return str
    },
    // removes <> tags from user text inputs
    stripTags: function(input){
        return input.replace(/<(?:.|\n)*?>/gm, '')
    },
    // creates a route for each event to be able to edit their content
    editIcon: function(eventId){
                return `<a href="/events/edit/${eventId}" class="btn-floating
                halfway-fab blue"><i class="fas fa-edit "></i></a>`
    }
}