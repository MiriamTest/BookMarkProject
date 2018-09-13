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
            this.subscribers = new HashSet<subscribers>();
        }
    
        public int IdLibrary { get; set; }
        public string NameLibrary { get; set; }
        public int City { get; set; }
        public int Street { get; set; }
        public int NumHouse { get; set; }
        public int GeoLocationX { get; set; }
        public int GeoLocationY { get; set; }
        public int IdAdmin { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<BooksInLibrary> BooksInLibrary { get; set; }
        public virtual Cities Cities { get; set; }
        public virtual Streets Streets { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<subscribers> subscribers { get; set; }
    }
}