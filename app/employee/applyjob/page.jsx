import React from 'react'

function page() {
  
  return (
    <>
  <label for="firstname">first name:</label><br />
  <input type="text" id="fname" name="fname" value="John" /><br />
  <label for="lname">Last name:</label><br />
  <input type="text" id="lname" name="lname" value="Doe" /><br />
  <input type="submit" value="Submit" / >
  </>
  )
}

export default page;