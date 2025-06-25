import { defineField, defineType } from 'sanity';

export const teamSectionType = defineType({
  name: 'teamSection',
  title: 'Team Section',
  type: 'document',
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
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'position',
              title: 'Position',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Short Description',
              type: 'text',
            }),
            defineField({
              name: 'bio',
              title: 'Bio',
              type: 'text',
            }),
            defineField({
              name: 'image',
              title: 'Profile Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'socialLinks',
              title: 'Social Links',
              type: 'object',
              fields: [
                defineField({
                  name: 'linkedin',
                  title: 'LinkedIn URL',
                  type: 'url',
                }),
                defineField({
                  name: 'twitter',
                  title: 'Twitter URL',
                  type: 'url',
                }),
                defineField({
                  name: 'github',
                  title: 'GitHub URL',
                  type: 'url',
                }),
              ],
            }),
          ],
        },
      ],
    }),
  ],
});
