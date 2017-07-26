String.prototype.replaceAt = function(index, text){
    return this.substr(0, index) + text + this.substr(index + text.length);
}

String.prototype.addTagAt = function(index, tagBegin, tagEnd, size){
    return this.substr(0, index) + tagBegin + this.substr(index, size) + tagEnd + this.substr(index + size);
}

String.prototype.replaceAt_with_size = function(index, text, size){
    return this.substr(0, index) + text + this.substr(index + size);
}
