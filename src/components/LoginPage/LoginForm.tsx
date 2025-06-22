import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// Define the form schema using Zod
const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

// Define the component props interface
interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This will be type-safe and validated.
    console.log('Login attempt with:', values);
    // Add login logic here, e.g., call an API
  }

  return (
    <Card className={cn("w-full max-w-sm bg-card shadow-lg", className)}>
      <CardHeader className="text-center">
        <h1 className="text-3xl font-bold text-card-foreground">Welcome back</h1>
        <CardDescription>Enter your credentials to access your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="name@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="text-right -mt-2">
                <Button variant="link" asChild className="p-0 h-auto text-sm font-normal text-secondary-foreground hover:text-primary">
                    <Link to="/forgot-password">Forgot Password?</Link>
                </Button>
            </div>
            
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <p className="text-sm text-secondary-foreground">
          Don't have an account?{' '}
          <Button variant="link" asChild className="p-0 h-auto font-semibold text-primary hover:underline">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;