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
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
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
    <Card className={cn("w-full max-w-sm bg-card shadow-md", className)}>
      <CardHeader>
        <h1 className="text-3xl font-bold text-center text-card-foreground">Welcome</h1>
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
                    <FormLabel className="text-sm font-medium text-secondary-foreground">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        className="bg-transparent border-0 border-b border-input rounded-none px-1 py-2 h-auto shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary placeholder:text-muted-foreground"
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
                    <FormLabel className="text-sm font-medium text-secondary-foreground">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        className="bg-transparent border-0 border-b border-input rounded-none px-1 py-2 h-auto shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary placeholder:text-muted-foreground"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="text-left -mt-2">
                <Button variant="link" asChild className="p-0 h-auto text-sm font-normal text-secondary-foreground hover:text-primary">
                    <Link to="/forgot-password">Forgot Password</Link>
                </Button>
            </div>
            
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <p className="text-sm text-secondary-foreground">
          Don't have an account?{' '}
          <Button variant="link" asChild className="p-0 h-auto font-semibold text-primary hover:underline">
            <Link to="/signup">SignUp</Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
