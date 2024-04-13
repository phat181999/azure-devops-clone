import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JSONEditor } from 'vanilla-jsoneditor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('jsoneditor', { static: true }) jsonEditorElementRef:
    | ElementRef
    | any;
  constructor() {}
  ngOnInit(): void {
    const content = {
      text: undefined,
      json: {
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com',
        address: {
          street: '123 Main St',
          city: 'Anytown',
          country: 'USA',
        },
        is_active: true,
        hobbies: ['reading', 'cooking', 'hiking'],
        friends: [
          {
            name: 'Alice',
            age: 28,
            email: 'alice@example.com',
          },
          {
            name: 'Bob',
            age: 32,
            email: 'bob@example.com',
          },
        ],
      },
    };

    new JSONEditor({
      target: this.jsonEditorElementRef.nativeElement,
      props: {
        content,

        onChange: (
          updatedContent,
          previousContent,
          { contentErrors, patchResult }
        ) => {
          console.log('onChange', {
            updatedContent,
            previousContent,
            contentErrors,
            patchResult,
          });
        },
      },
    });
  }
}
