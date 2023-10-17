import axios from 'axios';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Category } from '@/components/stores/dashboard/categories/categories';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const formSchema = z.object({
  title: z.string().min(2, { message: 'category must be atleast 2 characters long' }),
  id: z.string(),
  storeId: z.string(),
});

//Form for adding a new category
export function EditCategoryForm(category: Category) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: category.title,
      id: category.id,
      storeId: category.storeId,
    },
  });
  const params = useParams();

  function onSubmitting() {
    axios
      .patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${params.storeID}/categories`, {
        id: category.id,
        title: form.getValues('title'),
      })
      .then(function (response) {
        window.location.reload();
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitting)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Category name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </form>
    </Form>
  );
}
