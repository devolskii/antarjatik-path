import {defineType, defineField, defineArrayMember} from 'sanity'
export const tagType = defineType({
  type: 'document',
  name: 'tag',
  title: 'Tag',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'name',
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
