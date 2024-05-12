# Porsche frontend

To clone this repository run the following command

```
git clone https://github.com/malakabdelbaki/porsche-frontend.git
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

We will be using something called React Router V6 to switch between pages, all you have to know is
that if you want to switch pages by pressing a button, do NOT use anchor tags use the following code

```
import { Link } from 'react-router-dom';

****
<Link to="/product">
    <button> Product</button>
</Link>
```

As for fetching data, you have to use the useEffect hook to fetch data, so if your page has the
functionality for fetching data you have to use similar logic as defined below

We will also be using the axios library to fetch data as it is plain simple,

```
import axios from 'axios' //import at the beginning of the project

useEffect(()=>{
    const body = {
        testData:"testData"
    }
    const headers = headers: {
      	Content-Type': 'application/json',
  		'Authorization': 'json-web-token'
    }
    const response = await axios.get('http://localhost:3000/api/v1/products',body,headers);
    console.log(response.data);
},[])

```

Now to update the state or to use a variable in the html you should use the useState hook,

```
import {useState} from 'react'

const [text,setText] = useState("test!");

...

<div>{text}</div>

```
