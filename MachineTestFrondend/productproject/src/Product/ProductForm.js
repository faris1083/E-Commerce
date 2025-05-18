import React, { useState, useEffect } from 'react'
import './ProductForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import AdminNav from './AdminNav';
const ProductForm = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({ id: '', name: '', description: '', subcategory_id: '', image: '', ram: '', price: '', quantity: '' })
    const [sub,setSub]=useState([])

    useEffect(() => {

        let session = sessionStorage.getItem("aid")

        if (session == null) {
            navigate('/')
        }

        axios.get('http://127.0.0.1:8000/product/subcateview/')
            .then(response => setSub(response.data))

    }, []);

    const handlechange = (e) => {
        const { name, value, files } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }));
    }
    function handlesubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('id', data.id);
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('subcategory_id', data.subcategory_id);
        formData.append('image', data.image);
        formData.append('ram', data.ram);
        formData.append('price', data.price);
        formData.append('quantity', data.quantity);

        axios.post('http://127.0.0.1:8000/product/productinsert/', formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(function (response) {
                alert('successfully uploaded')
                navigate('/adminhome')
            })

    }
    return (
        <div>
            <AdminNav/>
        <div className="main">
            <div className="form-container">
                <h2>ADD PRODUCT</h2>
                <div className="form-container-inner">
                    <form>
                        <label><b>Name</b></label>
                        <input type="text" placeholder="Enter Name in uppercase" name='name' value={data.name} required onChange={handlechange} />

                        <label><b>Description</b></label>
                        <input type="text" placeholder="Enter Description" name='description' value={data.description} required onChange={handlechange} />

                        <label><b>Subcategory ID</b></label>
                        {/* <input type="text" placeholder="Enter Subcategory ID" name='subcategory_id' value={data.subcategory_id} required onChange={handlechange} /> */}

                        <select 
                            
                            name="subcategory_id"
                            value={data.subcategory_id}
                            onChange={handlechange}>
                            <option value="">Select a Shop</option>
                            {sub.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>

                        <label><b>Image</b></label>
                        <input type="file" required name='image' onChange={handlechange} />

                        <label><b>Ram</b></label>
                        <input type="text" placeholder="Enter ram" name='ram' value={data.ram} required onChange={handlechange} />

                        <label><b>Price</b></label>
                        <input type="text" placeholder="Enter price" name='price' value={data.price} required onChange={handlechange} />

                        <label><b>Quantity</b></label>
                        <input type="text" placeholder="Enter quantity" name='quantity' value={data.quantity} required onChange={handlechange} />

                        <button type="submit" onClick={handlesubmit}>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div></div>
    )
}

export default ProductForm