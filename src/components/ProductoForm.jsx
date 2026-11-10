import {useState} from 'react';
import {queryGraphql} from '../services/api';

export function ProductoForm(){
    const [titutlo,setTitulo] = useState('');
    const [body,setBody] = useState('');

    const QUERY_MUTATION = `
        mutation CreatePost($input: CreatePostInput!) {
            createPost(input: $input) {
                id,
                title,
                body
            }
        }
    `;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await queryGraphql(QUERY_MUTATION, {
                input: {
                    title: titutlo,
                    body: body
                }
            });
            console.log(data);
        } catch (error) {
            alert('Error'+error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h5>Nuevo Post</h5>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Titulo"
                    value={titutlo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <input
                type="text"
                className="form-control"
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />
                <button type="submit">Guardar</button>
            </form>
        </div>

    );}