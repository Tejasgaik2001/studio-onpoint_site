import { defineField, defineType } from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'About Page',
    }),

    // About Header Section
    defineField({
      name: 'aboutHeader',
      title: 'About Header Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Main Title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    // Intro Section
    defineField({
      name: 'introSection',
      title: 'Intro Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'highlights',
          title: 'Key Highlights',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),

    // Hero Banner Section
    defineField({
      name: 'heroBanner',
      title: 'Hero Banner Section',
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Hero Banner Image',
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
    }),

    // About Us Section
    defineField({
      name: 'aboutUsSection',
      title: 'About Us Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'text',
        }),
        defineField({
          name: 'mission',
          title: 'Mission Statement',
          type: 'text',
        }),
        defineField({
          name: 'vision',
          title: 'Vision Statement',
          type: 'text',
        }),
        defineField({
          name: 'values',
          title: 'Core Values',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Value Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Value Description',
                  type: 'text',
                }),
                defineField({
                  name: 'icon',
                  title: 'Value Icon',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // Content Wrapper Section
    defineField({
      name: 'contentWrapperSection',
      title: 'Content Wrapper Section',
      type: 'object',
      fields: [
        defineField({
          name: 'leftContent',
          title: 'Left Content',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
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
          ],
        }),
        defineField({
          name: 'rightContent',
          title: 'Right Content',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
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
          ],
        }),
      ],
    }),

    // Timeline Section
    defineField({
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
          title: 'Description',
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
                  name: 'title',
                  title: 'Event Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Event Description',
                  type: 'text',
                }),
                defineField({
                  name: 'image',
                  title: 'Event Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
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
    }),

    // Team Section
    defineField({
      name: 'teamSection',
      title: 'Team Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
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
    }),

    // Call to Action Section
    defineField({
      name: 'callToActionSection',
      title: 'Call to Action Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'ctaButton',
          title: 'CTA Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Button Link',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
