import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  post = this.formBuilder.group({
    title: this.formBuilder.control(''),
    description: this.formBuilder.control(''),
    body: this.formBuilder.control(''),
    tags: this.formBuilder.array([
      this.formBuilder.control('Angular'),
      this.formBuilder.control('HTML'),
      this.formBuilder.control('CSS'),
    ])
  })

  get tags(): FormArray {
    return this.post.get('tags') as FormArray;
  }

  addTag(tag: string): void {
    if (!tag)
      return;
    this.tags.push(this.formBuilder.control(tag));
  }

  removeTag(index: number): void {
    this.tags.removeAt(index);
  }

  createPost(): void {
    console.log(this.post.value);
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
