import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  type: 'document',
  name: 'hero',
  title: 'Hero',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'reference',
      name: 'heroPost',
      title: 'Hero Post',
      to: [{type: 'post'}],
    }),
  ],
})
