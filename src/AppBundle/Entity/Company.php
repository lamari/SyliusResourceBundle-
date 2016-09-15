<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

use Sylius\Component\Resource\Model\ResourceInterface;

/**
 * Company
 *
 * @ORM\Table(name="company")
 * @ORM\Entity
 */
class Company implements ResourceInterface
{
    /**
     * @var string
     *
     */
    private $name;

    /**
     * @var string
     *
     */
    private $address;

    /**
     * @var string
     *
     */
    private $description;

    /**
     * @var integer
     *
     */
    private $id;



    /**
     * Set name
     *
     * @param string $name
     * @return Company
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set address
     *
     * @param string $address
     * @return Company
     */
    public function setAddress($address)
    {
        $this->address = $address;

        return $this;
    }

    /**
     * Get address
     *
     * @return string 
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Set description
     *
     * @param string $description
     * @return Company
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string 
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }
}
