import { z } from 'zod';

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  phone: z.string().optional(),
  company: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Newsletter Subscription Schema
export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().optional(),
  preferences: z.array(z.enum(['news', 'updates', 'events'])).min(1, 'Please select at least one preference'),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

// User Profile Schema
export const userProfileSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  position: z.string().optional(),
  bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
});

export type UserProfileData = z.infer<typeof userProfileSchema>;

// Project Filter Schema
export const projectFilterSchema = z.object({
  category: z.enum(['all', 'mining', 'transport', 'forestry', 'agriculture']).default('all'),
  status: z.enum(['all', 'active', 'completed', 'upcoming']).default('all'),
  location: z.string().optional(),
  search: z.string().optional(),
});

export type ProjectFilterData = z.infer<typeof projectFilterSchema>; 