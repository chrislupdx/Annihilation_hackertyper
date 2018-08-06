text = `Where lies the strangling fruit that came from the hand of the sinner I shall bring forth the seeds of the dead to share with the worms that gather in the darkness and surround the world with the power of their lives while from the dimlit halls of other places forms that never were and never could be writhe for the impatience of the few who never saw what could have been. In the black water with the sun shining at midnight, those fruit shall come ripe and in the darkness of that which is golden shall split open to reveal the revelation of the fatal softness in the earth. The shadows of the abyss are like the petals of a monstrous flower that shall blossom within the skull and expand the mind beyond what any man can bear, but whether it decays under the earth or above on green fields, or out to sea or in the very air, all shall come to revelation, and to revel, in the knowledge of the strangling fruit—and the hand of the sinner shall rejoice, for there is no sin in shadow or in light that the seeds of the dead cannot forgive. And there shall be in the planting in the shadows a grace and a mercy from which shall blossom dark flowers, and their teeth shall devour and sustain and herald the passing of an age. That which dies shall still know life in death for all that decays is not forgotten and reanimated it shall walk the world in the bliss of not-knowing. And then there shall be a fire that knows the naming of you, and in the presence of the strangling fruit, its dark flame shall acquire every part of you that remains.`

let i=0  //we might want to right a reset in so that once i=1545(sermon length), it also needs to get selected by the thing you're building, increment splice(x,y) by i. does it need to get scoped in to typespace?

let typespace = document.querySelector('#cursor')
document.addEventListener('keydown', function(keypress){
  typespace.innerHTML += text.slice(i, i+1);
  console.log(text.slice(i, i+1))
  i++;

})

//incrementing i
//if i <= re

//how do we phrase (x,y) to our advantage, are there variables we can use to our beneift
//CAN WE ADJUST THE SCOPE OF A FUNCTION WITH A LOOOOOOOOP


//so what do you want to happen when you reach the end of your text?

//rn it's going chunk by chunk, how do it get text.slice(x,y) to go sequentially throughm 1545
//teachtime typespace goes off, add 1 (\iterate till we find the right arithmatic) and add to x and y?
//or could we declare the slice coordinates as variables?
// init and end sequence count totally works off of variables.
//sermon char length = 1545
