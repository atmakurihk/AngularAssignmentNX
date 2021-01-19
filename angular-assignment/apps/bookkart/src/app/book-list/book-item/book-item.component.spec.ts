import { BookItemComponent } from './book-item.component';
 describe('Test BookItem Component', () =>{
   let fixture:BookItemComponent;

   beforeEach(()=>{
     fixture = new BookItemComponent();
     fixture.ngOnInit();
   })

   it('test componet intialization', () =>{
     expect(fixture).toBeTruthy();
   })
 })
