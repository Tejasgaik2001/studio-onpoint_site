import { defineField, defineType } from 'sanity';

export const testimonialSectionType = defineType({
  name: 'testimonialSection',
  title: 'Testimonial Section',
  type: 'document', // ✅ Change from 'object' to 'document'
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'testimonials',
      title: 'Client Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Client Name',
              type: 'string',
            }),
            defineField({
              name: 'designation',
              title: 'Designation / Role',
              type: 'string',
            }),
            defineField({
              name: 'company',
              title: 'Company Name',
              type: 'string',
            }),
            defineField({
              name: 'feedback',
              title: 'Client Feedback',
              type: 'text',
            }),
            defineField({
              name: 'image',
              title: 'Client Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'rating',
              title: 'Client Rating',
              type: 'number',
              validation: (Rule) => Rule.min(1).max(5),
            }),
          ],
        },
      ],
    }),
  ],
});
