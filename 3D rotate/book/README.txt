A Pen created at CodePen.io. You can find this one at https://codepen.io/alexmwalker/pen/YXKLKw.

 Hit the 'animate' radio button. Also feel free to fiddle with the Sass values at the top.

I'm experimenting with animating a linear gradient across the image surface to fake a static light source as the model moves. 

At the moment:
- 1 image
- 3 linear gradients
- 1 animation for the rotation
- 1 animation for the shiny lighting effect, but applied across 3 surfaces (with appropriate timing delays)

As you can't *directly* animate CSS gradients, I'm animating the gradient's background-position, which is always the upper-most layer in a multiple background stack. 

So, why am I using empty background layers in those stacks? (like this)


background-image: 
      $LEgradient,
      url(none),
      url($book_graphic),
      url(none);

Each book face needs a different background-position to position that cover PNG in its frame - front, spine and back = right, center, left. 

I want these framing DIVs to share the top layer gradient animation -- but that CSS animation would also override the background position of the cover images on the layer below. 

In a perfect world, it would be great to be able to just tell them to 'inherit' their original background position - but that doesn't happen.

So, I'm assigning a different background-position to each background layer (i.e. right, center, left), and then only rendering the cover image into the layer with the positioning I need. The other layers are left empty on each face. Then my animation code moves the top layer, and just re-states the original position of the layers.

This might sound a little convoluted, but it's probably better than creating a new different animation for each book face (or using three separate background graphics).

I suspect a radial gradient might look good too.

FUN FACT: -webkit-filter applied to HTML elements kills their pseudo elements (:after :before). Weird, huh?

PS. There's some extra explanation here:http://community.sitepoint.com/t/pure-css-3d-product-shots-from-a-2d-graphic/149209