import {defineType, defineField, defineArrayMember} from 'sanity'
export const yearType = defineType({
  type: 'document',
  name: 'year',
  title: 'Year',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'slug',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'array',
      name: 'posts',
      title: 'posts',
      of: [defineArrayMember({type: 'reference', to: [{type: 'post'}]})],
    }),
  ],
})
