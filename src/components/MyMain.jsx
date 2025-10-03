import { useState } from "react";

const MyMain = () => {

    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false
    });

    function handleFormData(e) {

        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
            .then(res => console.log("dati inviati", res.data))
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="element">
                        <input
                            className="form-control"
                            placeholder="Nome autore"
                            type="text"
                            value={formData.author}
                            onChange={handleFormData}
                            name="author"
                        />
                    </div>
                    <div className="element">
                        <input
                            className="form-control"
                            placeholder="Titolo del post"
                            type="text"
                            value={formData.title}
                            onChange={handleFormData}
                            name="title"
                        />
                    </div>
                    <div className="element">
                        <textarea
                            className="form-control"
                            placeholder="Testo del post"
                            type="text"
                            value={formData.body}
                            onChange={handleFormData}
                            name="body"
                        />
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            name="public"
                            id="public"
                            className="form-check-input"
                            checked={formData.public}
                            onChange={handleFormData}
                        />
                        <label className="form-check-label" htmlFor="public">Pubblica Post</label>
                    </div>
                    <button type="submit" className="bottone">Invia Post</button>
                </form>
            </div>

            <div>
                <p> NOME AUTORE: {formData.author} </p>
                <p> TITOLO POST: {formData.title} </p>
                <p> {formData.body}</p>
            </div>
        </>
    )
}

export default MyMain