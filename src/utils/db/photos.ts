interface IPhoto {
  id: number
  title: string
  description: string
  url: string
}

export const photosArray: Array<IPhoto> = [
  {
    id: 1,
    title: 'Photo 1',
    description: 'This is the first photo',
    url: 'https://picsum.photos/id/1/200/300',
  },
  {
    id: 2,
    title: 'Photo 2',
    description: 'This is the second photo',
    url: 'https://picsum.photos/id/2/200/300',
  },
]
