import { Component, OnInit, inject, signal } from '@angular/core';
import { Storage, listAll, ref, getDownloadURL } from '@angular/fire/storage';

type ImageStorage = {
  name: string;
  url: string;
};

@Component({
  selector: 'app-home-list',
  standalone: true,
  imports: [],
  template: `
    <div class="w-full max-w-[600px] mx-auto px-5 pt-[100px]">
      @for (image of images(); track image) {
        <div class="mb-4">
          <p class="mb-4">{{ image.name }}</p>
          <picture
            class="border-2 border-green-500 rounded-lg overflow-hidden block"
          >
            <img [src]="image.url" [alt]="image.name" loading="lazy" />
          </picture>
        </div>
      }
    </div>
  `,
  styles: ``,
})
export default class HomeListComponent implements OnInit {
  private readonly _storage = inject(Storage);

  images = signal<ImageStorage[]>([]);

  async ngOnInit() {
    const reference = ref(this._storage, 'uploads');
    const images = await listAll(reference);

    for (const image of images.items) {
      const url = await getDownloadURL(image);
      this.images.update((oldImages) => {
        return [...oldImages, { url, name: image.name }];
      });
    }

    console.log(this.images());
  }
}
