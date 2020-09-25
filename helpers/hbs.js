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
    editIcon: function(eventUser, loggedUser, eventId, floating = true){
        if(eventUser._id.toString() == loggedUser._id.toString()){
            if(floating){
                return `<a href="/events/edit/${eventId}" class="btn-floating
                halfway-fab blue">
                    <i class="fas fa-edit edit-icon"></i>
                </a>`;
            } else{
                return  `<a href="/events/edit/${eventId}">
                    <i class="fas fa-edit trash-icon "></i>
                </a>`
            }
        } else{
            return ''
        }
         
    },
    trashIcon: function(eventUser, loggedUser, eventId){
        if(eventUser._id.toString() == loggedUser._id.toString()){
                return `<form action="/events/${eventId}" method="POST" id="delete-from" class="trash-icon">
                          <input type="hidden" name="_method" value="DELETE">
                          <button type="submit" class="btn ">
                            <i class="fas fa-trash"></i>
                          </button>
                        </form>`;
        } else{
            return ''
        }
    }
}