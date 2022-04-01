import axios from 'axios';

const BASE_URL = 'http://localhost:5000/admin/api/';

const TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDJjMmM4ZWNiNzc2NTA5MjE1YjA3NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODYzNTY0OCwiZXhwIjoxNjQ4ODk0ODQ4fQ.NywW7GbnbzFMYrSEOOUxjl7n5dL7UGGJR_7QpDJyMUA';

const http = axios.create({
	baseURL: BASE_URL,
	headers: { token: 'Bearer ' + TOKEN },
});

export default http;
