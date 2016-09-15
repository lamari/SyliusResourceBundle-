<?php

namespace AppBundle\Form\Type;

use Sylius\Bundle\ResourceBundle\Form\Type\AbstractResourceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;

class BookType extends AbstractResourceType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        //is this form for create or update?
        $id = $options['data']->getId();
        $method = isset($id) ? "PUT" : "POST";

        // Add btn submit!
        $builder->setMethod($method)
                ->add('title', 'text')
                ->add('author', 'text')
                ->add('description', 'textarea')
                ->add('submit', SubmitType::class);
    }

    public function getName()
    {
        return 'html_book';
    }
}