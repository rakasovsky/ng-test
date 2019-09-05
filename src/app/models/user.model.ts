import {Deserializable} from './deserializable.model';

export class User implements Deserializable {
  public id: string;
  public guid: string;
  public isActive: boolean;
  public balance: string;
  public picture: string;
  public age: number;
  public eyeColor: string;
  public name: string;
  public gender: string;
  public company: string;
  public email: string;
  public phone: string;
  public address: string;
  public about: string;
  public registered: string;
  public latitude: number;
  public longitude: number;
  public tags: string[];
  deserialize(input: any): this {
    Object.assign(this, input);
    this.id = input._id;
    return this;
  }
}
