import { defineField, defineType } from 'sanity';

export const timelineSection = defineType({
  name: 'timelineSection',
  title: 'Timeline Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
    }),
    defineField({
      name: 'timelineItems',
      title: 'Timeline Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'year',
              title: 'Year',
              type: 'string',
            }),
            defineField({
              name: 'eventTitle',
              title: 'Event Title',
              type: 'string',
            }),
            defineField({
              name: 'eventDescription',
              title: 'Event Description',
              type: 'text',
            }),
            defineField({
              name: 'position',
              title: 'Position',
              type: 'string',
              options: {
                list: [
                  { title: 'Left', value: 'left' },
                  { title: 'Right', value: 'right' },
                ],
              },
            }),
          ],
        },
      ],
    }),
  ],
});
