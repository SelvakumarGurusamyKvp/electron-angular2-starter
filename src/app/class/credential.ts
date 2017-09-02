export class Credential {

    public id: number = 0;
    public username: string = '';
    public email: string = '';
    public password: string = '';
    public avatar: string = '';
    public token: string = '';
    public refreshToken: string = '';
    public autoconnect: boolean = true;

    constructor(id: number,
                username: string,
                email: string,
                password: string,
                avatar: string,
                token: string,
                refreshToken: string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.token = token;
        this.refreshToken = refreshToken;
    }
}
