import DS from 'ember-data';

function normalizeRecord(apiPayload): any {
    return Object.assign( apiPayload, {id: apiPayload.attributes.slug});
}

export default class AppSerializer extends DS.JSONAPISerializer {
    public normalizeResponse(store: DS.Store, 
        primaryModelClass: DS.Model, 
        payload: {data: any | any[]}, 
        id: string | number, 
        requestType: string): any 
        {
        
        let normPayload = payload;
        if (payload.data instanceof Array) {
            normPayload = {
                // jsonapi: payload.jsaonapi,
                data: payload.data.map(normalizeRecord)
            };
        } else {
            normPayload = {
                // jsonapi: payload.jsaonapi,
                data: normalizeRecord(payload.data)
            }
        }

        return super.normalizeResponse(store, primaryModelClass, normPayload, id, requestType);
    }
}
