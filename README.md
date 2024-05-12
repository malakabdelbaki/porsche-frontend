# Porsche frontend

To clone this repository run the following command

```
git clone https://github.com/malakabdelbaki/porsche-frontend.git
```

then run

```
npm install
npm run dev
```

It will seem intimidating at first but we will only ever use the src folder.

Each page will be located in the pages src/pages folder. this is where your work will be.

1. Login Page
2. Admin Registration Page
3. Customer Registration Page
4. Landing Page
5. Products Page
6. Cart Page
7. Admin Page

**Please stick to black and white color scheme only, and please write your css in a separate file**

And also please follow the folder structure, for example in the src/pages/admin, i have two files
Admin.jsx and Admin.css

this is how Admin.jsx should look like, with the import for Admin.css, the css will load automatically once imported this way

```js
import React from "react";

import "./Admin.css";

const Admin = () => {
  return <div>Admin</div>;
};

export default Admin;
```

**THE COMPONENTS FOLDER should have redundant components, like a button, navbar, etc...**

We will be using something called React Router V6 to switch between pages, all you have to know is
that if you want to switch pages by pressing a button, do NOT use anchor tags use the following code

```js
import { Link } from 'react-router-dom';

****
<Link to="/product">
    <button> Product</button>
</Link>
```

Now to update the state or to use a variable in the html you should use the useState hook,

```js
import {useState} from 'react'

const [text,setText] = useState("test!");

...

<div>{text}</div>

```

As for fetching data, you have to use the useEffect hook to fetch data, so if your page has the
functionality for fetching data you have to use similar logic as defined below

We will also be using the axios library to fetch data as it is plain simple,

```js
import axios from 'axios' //import at the beginning of the project

useEffect(()=>{
    const body = {
        testData:"testData"
    }
    const headers = headers: {
        'Content-Type': 'application/json',
  		'Authorization': 'json-web-token' //make sure to replace this with the token from localstorage, we will implement it soon.
    }
    const response = await axios.get('http://localhost:3000/api/v1/products',body,headers);
    console.log(response.data);
    //e.g = ['test','test2','test3']
    setProductsArray(response.data);
    // ASSUMING YOU HAVE A PRODUCT ARRAY this is how you will set the product array thats using the useState hook
    //you can then map over this array on your page to display each singular element

},[])

```

my other repositories i used react in ,for reference,

```
https://github.com/yousefnegmeldin/notAnotherTaskApp/tree/main/client/src
https://github.com/yousefnegmeldin/filmpire
```
