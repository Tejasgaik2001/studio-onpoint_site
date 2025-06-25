import { defineField, defineType } from 'sanity';

export const caseStudySectionType = defineType({
  name: 'caseStudySection',
  title: 'Case Study Section',
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
      name: 'caseStudies',
      title: 'Case Studies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'projectTitle',
              title: 'Project Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Short Description',
              type: 'text',
            }),
            defineField({
              name: 'challenge',
              title: 'Challenge',
              type: 'text',
            }),
            defineField({
              name: 'solution',
              title: 'Solution',
              type: 'text',
            }),
            defineField({
              name: 'result',
              title: 'Result',
              type: 'text',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'altText',
              title: 'Image Alt Text',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
});
