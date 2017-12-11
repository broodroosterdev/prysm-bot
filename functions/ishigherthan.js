module.exports = (client, user, message) => {
    clientinguild = message.guild.members.get(client.user.id)
    authoringuild = message.guild.members.get(user.id)
    if(!authoringuild) return message.channel.send("I cant find the user.. Weird stuff. If this keeps happening please message my owner: broodrooster#5242")
    clientposition = clientinguild.highestRole.calculatedPosition
    authorposition = authoringuild.highestRole.calculatedPosition
    if(clientposition <= authorposition) {
        return false
    }
    if(authorposition < clientposition) {
        return true
    }
}