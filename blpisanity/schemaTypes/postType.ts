import {defineType, defineField, defineArrayMember} from 'sanity'
import {BookIcon} from '@sanity/icons'
import {ImageIcon} from '@sanity/icons'
import {BlockquoteIcon} from '@sanity/icons'

export const postType = defineType({
  type: 'document',
  name: 'post',
  title: 'Post',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'slug',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'text',
      name: 'description',
      title: 'Description',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'datetime',
      name: 'date',
      title: 'Date',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'array',
      name: 'content',
      title: 'Content',
      validation: (e) => e.required(),
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'endnote',
                type: 'object',
                title: 'Endnote',
                icon: BookIcon,
                fields: [
                  {
                    name: 'note',
                    type: 'text',
                    title: 'Endnote text',
                  },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          icon: ImageIcon,
          options: {hotspot: true}, // enables cropping/focal point
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              options: {
                isHighlighted: true, // shows inside the editor
              },
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              description: 'Important for SEO and accessibility.',
              validation: (Rule) => Rule.required(),
            },
          ],
        }),
        defineArrayMember({
          type: 'object',
          name: 'pullQuote',
          title: 'Pull Quote',
          icon: BlockquoteIcon,
          fields: [
            {
              name: 'quote',
              type: 'text',
              title: 'Quote',
            },
          ],
          preview: {
            select: {title: 'quote'},
          },
        }),
      ],
    }),
    defineField({
      type: 'image',
      name: 'mainImage',
      title: 'Main Image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'caption',
          type: 'string',
        }),
      ],
    }),
    /* defineField({
      type: 'array',
      name: 'topic',
      title: 'Topic',
      of: [defineArrayMember({type: 'reference', to: [{type: 'tag'}]})],
    }), */
  ],
})
