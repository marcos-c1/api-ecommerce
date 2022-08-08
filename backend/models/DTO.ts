type ObjectType = {
    [key: string]: any;
}

export class Request {
    body: ObjectType
    params: ObjectType
    constructor(object?: ObjectType, params?: ObjectType) {
        this.body = object ?? {}
        this.params = params ?? {}
    }
}

export class Response {
    private message: String
    private statusCode: Number

    status(statusCode: Number): Response {
        this.statusCode = statusCode
        return this
    }

    json(object?: ObjectType, message?: String): void {
        this.message = object.message ?? message
        console.log(JSON.stringify(this.message))
    }

    getMessage(): String {
        return this.message
    }

    getStatusCode(): Number {
        return this.statusCode
    }
}