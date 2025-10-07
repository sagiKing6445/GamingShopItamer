export class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public checkout: boolean = false,
    public gameImage: string = ''
  ) {}
}