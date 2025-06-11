import { defineField, defineType } from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Home Page',
    }),
    
    // Hero Section
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'headline',
          title: 'Main Headline',
          type: 'string',
        }),
        defineField({
          name: 'subheadline',
          title: 'Sub Headline',
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

    // Logo Slider Section
    defineField({
      name: 'logoSlider',
      title: 'Logo Slider',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'logos',
          title: 'Company Logos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Company Name',
                  type: 'string',
                }),
                defineField({
                  name: 'logo',
                  title: 'Logo Image',
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

    // Smart Choice Section
    defineField({
      name: 'smartChoiceSection',
      title: 'Smart Choice Section',
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
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Feature Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Feature Description',
                  type: 'text',
                }),
                defineField({
                  name: 'icon',
                  title: 'Feature Icon',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'image',
          title: 'Section Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    // Impactful Numbers Section
    defineField({
      name: 'impactfulNumbers',
      title: 'Impactful Numbers Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'stats',
          title: 'Statistics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'number',
                  title: 'Number',
                  type: 'string',
                }),
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // Impactful Solutions Section
    defineField({
      name: 'impactfulSolutions',
      title: 'Impactful Solutions Section',
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
          name: 'solutions',
          title: 'Solutions',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Solution Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Solution Description',
                  type: 'text',
                }),
                defineField({
                  name: 'image',
                  title: 'Solution Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                }),
                defineField({
                  name: 'features',
                  title: 'Features',
                  type: 'array',
                  of: [{ type: 'string' }],
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // Case Study Section
    defineField({
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
          title: 'Description',
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
                  name: 'title',
                  title: 'Case Study Title',
                  type: 'string',
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
                  name: 'results',
                  title: 'Results',
                  type: 'array',
                  of: [{ type: 'string' }],
                }),
                defineField({
                  name: 'image',
                  title: 'Case Study Image',
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

    // Our Clients Section
    defineField({
      name: 'ourClientsSection',
      title: 'Our Clients Section',
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
          name: 'clients',
          title: 'Clients',
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
                  name: 'role',
                  title: 'Role/Position',
                  type: 'string',
                }),
                defineField({
                  name: 'image',
                  title: 'Client Image',
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

    // Testimonials Section
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'testimonials',
          title: 'Testimonials',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'quote',
                  title: 'Quote',
                  type: 'text',
                }),
                defineField({
                  name: 'author',
                  title: 'Author Name',
                  type: 'string',
                }),
                defineField({
                  name: 'position',
                  title: 'Position',
                  type: 'string',
                }),
                defineField({
                  name: 'company',
                  title: 'Company',
                  type: 'string',
                }),
                defineField({
                  name: 'avatar',
                  title: 'Avatar',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                }),
                defineField({
                  name: 'rating',
                  title: 'Rating (1-5)',
                  type: 'number',
                  validation: Rule => Rule.min(1).max(5),
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // Tools Section
    defineField({
      name: 'toolsSection',
      title: 'Tools Section',
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
          name: 'tools',
          title: 'Tools',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Tool Name',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Tool Description',
                  type: 'text',
                }),
                defineField({
                  name: 'icon',
                  title: 'Tool Icon',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                }),
                defineField({
                  name: 'category',
                  title: 'Category',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Frontend', value: 'frontend' },
                      { title: 'Backend', value: 'backend' },
                      { title: 'Database', value: 'database' },
                      { title: 'DevOps', value: 'devops' },
                      { title: 'Design', value: 'design' },
                      { title: 'Mobile', value: 'mobile' },
                    ],
                  },
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // FAQ Section
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'faqs',
          title: 'FAQs',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'question',
                  title: 'Question',
                  type: 'string',
                }),
                defineField({
                  name: 'answer',
                  title: 'Answer',
                  type: 'text',
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // Work With Us Section
    defineField({
      name: 'workWithUsSection',
      title: 'Work With Us Section',
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
