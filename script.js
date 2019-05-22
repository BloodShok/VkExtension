function hi() {
    performance.getEntries().forEach(element => {
       
        if(element.initiatorType === "audio")
            console.log(element.name);
    })
};