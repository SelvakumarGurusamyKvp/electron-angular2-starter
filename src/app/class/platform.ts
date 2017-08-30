export class Platform {

	public name: string = '';
	public website: string = '';
	public api: string = '';

	constructor(name: string, website: string, api: string) {
		this.name = name;
		this.website = website;
		this.api = api;
	}
}