//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Entities
{
    using System;
    using System.Collections.Generic;
    
    public partial class Libraries
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Libraries()
        {
            this.BooksInLibrary = new HashSet<BooksInLibrary>();
            this.Payments = new HashSet<Payments>();
            this.SecretaryInLibrary = new HashSet<SecretaryInLibrary>();
        }
    
        public int IdLibrary { get; set; }
        public string NameLibrary { get; set; }
        public int City { get; set; }
        public int Street { get; set; }
        public int NumHouse { get; set; }
        public int IdAdmin { get; set; }
        public string OpeningHours { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<BooksInLibrary> BooksInLibrary { get; set; }
        public virtual Cities Cities { get; set; }
        public virtual Streets Streets { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Payments> Payments { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SecretaryInLibrary> SecretaryInLibrary { get; set; }
    }
}
