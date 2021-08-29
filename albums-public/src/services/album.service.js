import http from '../http-common';

class AlbumDataService {
    getAll() {
        return http.get("/albums");
    }

    get(id) {
        return http.get(`/albums/${id}`);
    }

    getListenedTo() {
        return http.get("/albums/listened");
    }

    getCurrent() {
        return http.get("/albums/current");
    }

    create(data) {
        return http.post("/albums", data);
    }

    update(id, data) {
        return http.put(`/albums/${id}`, data);
    }

    delete(id) {
        return http.delete(`/albums/${id}`);
    }

    deleteAll() {
        return http.delete(`/albums`);
    }

    findBySlug(slug) {
        return http.get(`/albums?slug=${slug}`);
    }
}

export default new AlbumDataService();