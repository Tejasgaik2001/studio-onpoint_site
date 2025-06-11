import { defineField, defineType } from 'sanity'

export const servicesPageType = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Services Page',
    }),

    // Hero Section
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Main Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
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
        defineField({
          name: 'backgroundGradient',
          title: 'Background Gradient',
          type: 'string',
          description: 'CSS gradient string (e.g., linear-gradient(45deg, #ff6b6b, #4ecdc4))',
        }),
      ],
    }),

    // Services Section
    defineField({
      name: 'servicesSection',
      title: 'Services Section',
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
          name: 'services',
          title: 'Services',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Service Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Service Description',
                  type: 'text',
                }),
                defineField({
                  name: 'icon',
                  title: 'Service Icon',
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
                defineField({
                  name: 'technologies',
                  title: 'Technologies',
                  type: 'array',
                  of: [{ type: 'string' }],
                }),
                defineField({
                  name: 'pricing',
                  title: 'Pricing',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'startingPrice',
                      title: 'Starting Price',
                      type: 'string',
                    }),
                    defineField({
                      name: 'priceDescription',
                      title: 'Price Description',
                      type: 'string',
                    }),
                  ],
                }),
                defineField({
                  name: 'image',
                  title: 'Service Image',
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
                      { title: 'Web Development', value: 'web-development' },
                      { title: 'Mobile Development', value: 'mobile-development' },
                      { title: 'UI/UX Design', value: 'ui-ux-design' },
                      { title: 'Digital Marketing', value: 'digital-marketing' },
                      { title: 'Consulting', value: 'consulting' },
                      { title: 'E-commerce', value: 'e-commerce' },
                    ],
                  },
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // Process Section
    defineField({
      name: 'processSection',
      title: 'Process Section',
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
          name: 'steps',
          title: 'Process Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'stepNumber',
                  title: 'Step Number',
                  type: 'number',
                }),
                defineField({
                  name: 'title',
                  title: 'Step Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Step Description',
                  type: 'text',
                }),
                defineField({
                  name: 'icon',
                  title: 'Step Icon',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                }),
                defineField({
                  name: 'duration',
                  title: 'Duration',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // Why Choose Us Section
    defineField({
      name: 'whyChooseUsSection',
      title: 'Why Choose Us Section',
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
          name: 'reasons',
          title: 'Reasons',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Reason Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Reason Description',
                  type: 'text',
                }),
                defineField({
                  name: 'icon',
                  title: 'Reason Icon',
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

    // Pricing Section
    defineField({
      name: 'pricingSection',
      title: 'Pricing Section',
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
          name: 'pricingPlans',
          title: 'Pricing Plans',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Plan Name',
                  type: 'string',
                }),
                defineField({
                  name: 'price',
                  title: 'Price',
                  type: 'string',
                }),
                defineField({
                  name: 'duration',
                  title: 'Duration',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Plan Description',
                  type: 'text',
                }),
                defineField({
                  name: 'features',
                  title: 'Features',
                  type: 'array',
                  of: [{ type: 'string' }],
                }),
                defineField({
                  name: 'isPopular',
                  title: 'Popular Plan',
                  type: 'boolean',
                  initialValue: false,
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
                defineField({
                  name: 'category',
                  title: 'Category',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'General', value: 'general' },
                      { title: 'Pricing', value: 'pricing' },
                      { title: 'Technical', value: 'technical' },
                      { title: 'Support', value: 'support' },
                    ],
                  },
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
